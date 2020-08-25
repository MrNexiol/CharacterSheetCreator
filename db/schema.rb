# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_25_071905) do

  create_table "character_sheet_skills", force: :cascade do |t|
    t.integer "skill_id"
    t.integer "character_sheet_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "value"
    t.index ["character_sheet_id"], name: "index_character_sheet_skills_on_character_sheet_id"
    t.index ["skill_id"], name: "index_character_sheet_skills_on_skill_id"
  end

  create_table "character_sheets", force: :cascade do |t|
    t.string "name"
    t.integer "experience", default: 150
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
    t.integer "brawn", default: 10
    t.integer "intelligence", default: 10
    t.integer "perception", default: 10
    t.integer "agility", default: 10
    t.integer "dexterity", default: 10
    t.integer "determination", default: 10
    t.float "barter", default: 0.0
    t.float "money", default: 0.0
    t.string "description"
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.string "parent_stat"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
