# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141128214237) do

  create_table "addresses", force: true do |t|
    t.string   "line1"
    t.string   "line2"
    t.string   "line3"
    t.string   "city"
    t.string   "po_box"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "state"
  end

  create_table "answers", force: true do |t|
    t.integer  "question_id"
    t.string   "text"
    t.boolean  "correct"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "codes", force: true do |t|
    t.string   "text"
    t.float    "price"
    t.boolean  "used"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "locked",     default: false
  end

  create_table "difficulties", force: true do |t|
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "prizes", force: true do |t|
    t.integer  "difficulty_id"
    t.string   "description"
    t.integer  "stock"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "questions", force: true do |t|
    t.integer  "difficulty_id"
    t.text     "text"
    t.string   "source"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.integer  "address_id"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "phone_number"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "code"
    t.datetime "birthdate"
    t.string   "cellphone"
  end

  create_table "winners", force: true do |t|
    t.integer  "user_id"
    t.integer  "code_id"
    t.integer  "prize_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
