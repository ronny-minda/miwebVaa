exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsProyecto {
        nodes {
          nombre
        }
      }
    }
  `)

  if (resultado.errors) {
    reporter.panic("no hubo resultados", resultado.errors)
  }

  const protectos = resultado.data.allDatoCmsProyecto.nodes

  /*   console.log(protectos); */

  protectos.forEach(protecto => {
    /*     console.log(protecto.nombre) */

    actions.createPage({
      path: protecto.nombre,
      component: require.resolve("./src/components/proyectosDinamicos.js"),
      context: {
        pro: protecto.nombre,
      },
      defer: true,
    })
  })

  /*   const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  }) */
}
