import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'
import { FOUNDRY_CONTRACT_ADDRESS, SCROLL_CONTRACT_ADDRESS } from '@/constants'

export default defineConfig({
  out: 'src/generated.ts',
  plugins: [
    foundry({
      deployments: {
        Counter: {
          [534351]: SCROLL_CONTRACT_ADDRESS,
          [31337]: FOUNDRY_CONTRACT_ADDRESS,
        },
      },
      project: './contracts',
    }),
    react(),
  ],
})
