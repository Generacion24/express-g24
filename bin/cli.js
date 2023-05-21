#!/usr/bin/env node

const { execSync } = require('child_process')

const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: 'inherit' })
  } catch (e) {
    console.error(`Failed to execute ${command}`, e)
    return false
  }
  return true
}

const repoName = process.argv[2]
const gitCheckoutCommand = `git clone --depth 1  https://github.com/Generacion24/express-g24.git ${repoName}`

const installDepsCommand = `cd ${repoName} && npm install`

console.log(`Cloning the repository with name ${repoName}`)
const checkedOut = runCommand(gitCheckoutCommand)
if (!checkedOut) process.exit(-1)

console.log(`Installing dependencies for ${repoName}`)
const installedDeps = runCommand(installDepsCommand)
if (!installedDeps) process.exit(-1)
console.log('')
console.log(" Congratulations! You are ready. Follow the following command to start 👏")
console.log('')
console.log(`   ✅ cd ${repoName}`)
console.log('')
console.log('   ✅ npm i ')
console.log('')
console.log('   ✅ code .')
console.log('')
console.log('   ✅ npm run dev')
console.log('')