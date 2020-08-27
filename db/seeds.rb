# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'Tomaszowy', email: 'admin@example.com', password: '123456')

Skill.create(name: 'Obserwacja', start_value: 8, parent_stat: Skill::STAT_NAMES[3])
Skill.create(name: 'Manipulacja', start_value: 8, parent_stat: Skill::STAT_NAMES[3])
Skill.create(name: 'Komunikacja', start_value: 8, parent_stat: Skill::STAT_NAMES[3])
Skill.create(name: 'Siła', start_value: 8, parent_stat: Skill::STAT_NAMES[0])
Skill.create(name: 'Odporność na ból', start_value: 8, parent_stat: Skill::STAT_NAMES[1])
Skill.create(name: 'Kanalarstwo', start_value: 0, parent_stat: Skill::STAT_NAMES[3])
