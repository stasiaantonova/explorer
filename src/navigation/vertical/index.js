import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://github.com/stasiaantonova/ERN/blob/main/logo.svg',
    })
  }
  chainMenus.push({
    title: 'WEBsite',
    href: 'https://ernventures.com',
    icon: 'ChromeIcon',
  })
  chainMenus.push({
    title: 'Telegram',
    href: 'https://t.me/ernventuresglobal',
    icon: 'SendIcon',
  })
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/ERNcrypto/Testnet-Manuals',
    icon: 'GithubIcon',
  })

  return chainMenus
}

export default processMenu()
