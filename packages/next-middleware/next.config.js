module.exports = function () {
  return {
    middleware: async function (req, res) {
      res.setHeader('X-Creator', 'turbokuzmich')
    },
  }
}
