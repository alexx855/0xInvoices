import * as LitJsSdk from '@lit-protocol/lit-node-client';
import type { MultipleAccessControlConditions, AccessControlConditions } from '@lit-protocol/types';

const chain = 'sepolia'
// const chain = 'scrollSepolia'

const client = new LitJsSdk.LitNodeClient({
  // alertWhenUnauthorized: false,
  litNetwork: 'cayenne',   // 'cayenne' | 'localhost' | 'custom';
});

const accessControlConditions: AccessControlConditions = [
  {
    contractAddress: '',
    standardContractType: '',
    chain,
    method: 'eth_getBalance',
    parameters: [':userAddress', 'latest'],
    returnValueTest: {
      comparator: '>=',
      value: '0',
    },
  },
];

const multipleAccessControlConditions: MultipleAccessControlConditions = { accessControlConditions };
class Lit {
  private litNodeClient: LitJsSdk.LitNodeClient | null = null

  async connect() {
    await client.connect()
    this.litNodeClient = client
  }

  async encrypt(dataToEncrypt: string, authSig: any) {
    if (!this.litNodeClient) {
      await this.connect()
    }

    const { ciphertext, dataToEncryptHash } = await LitJsSdk.encryptString(
      {
        accessControlConditions,
        authSig,
        chain,
        dataToEncrypt,
      },
      this.litNodeClient!,
    );

    return {
      ciphertext,
      dataToEncryptHash,
    };
  }

  async decrypt(ciphertext: string, dataToEncryptHash: string, authSig: any) {
    if (!this.litNodeClient) {
      await this.connect()
    }

    const decryptedString = LitJsSdk.decryptToString(
      {
        accessControlConditions,
        ciphertext,
        dataToEncryptHash,
        authSig,
        chain,
      },
      this.litNodeClient!,
    );
    return decryptedString
  }
}

const litInstance = new Lit();
export default litInstance;
