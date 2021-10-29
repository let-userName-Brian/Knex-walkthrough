
exports.up = function(knex) {
    return knex.schema.createTable('movies', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('title').notNullable();
      table.string('genre');
      table.date('release_date');
      table.timestamps(true, true); // adds created_at and updated_at
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movies');
  };

  //run this command to update the migration: npx knex migrate:latest

  //run npx knex migrate:rollback to undo the last migration and run the .down function
  