
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments(); //give it the next available id for primary key
        tbl.string('model').notNullable();
        tbl.string('make').notNullable();
        tbl.string('vin').notNullable().unique();
        tbl.integer('mileage');

    });

};

exports.down = function (knex) {
    //undo everything from up table. 
    return knex.drobTableIfExists('cars') //delete

};
