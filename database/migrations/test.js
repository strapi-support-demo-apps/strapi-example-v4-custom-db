module.exports = {
  async up(knex) {
    // You have full access to the Knex.js API with an already initialized connection to the database
    // ------------------------
    // EXAMPLE: renaming Table
    // await knex.schema.renameTable('oldName', 'newName')
    // ------------------------
    // EXAMPLE: renaming column
    // await knex.schema.table('someTable', table => {
    //   table.renameColumn('oldName', 'newName')
    // })
  },
  down(knex) {
    // This one isn't implemented yet, will be eventually
  },
};
