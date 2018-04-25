exports.randomPassword = () => {
  // Generate random number, eg: 0.123456
  // Convert  to base-36 : "0.4fzyo82mvyr"
  // Cut off last 8 characters : "yo82mvyr"
  return Math.random()
    .toString(36)
    .slice(-8)
}
