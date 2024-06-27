/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'Kibble', description: 'dry, dull, small bits of food'},
    {id: 2, name: 'Live feed', description: 'crickets, mice'},
    {id: 3, name: 'Seed', description: 'seeds'}
  ]);
};
