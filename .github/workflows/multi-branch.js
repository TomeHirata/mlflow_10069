module.exports = async ({ github, context }) => {
  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  await sleep(30000)
  console.log("multi-branch job done")
}
