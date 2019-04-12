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

ActiveRecord::Schema.define(version: 20171102214633) do

  create_table "component_details", force: :cascade do |t|
    t.string   "type_id",                   limit: 255
    t.string   "energy_domain",             limit: 255
    t.string   "general_type_of_component", limit: 255
    t.string   "specific_component",        limit: 255
    t.string   "specific_technology",       limit: 255
    t.string   "label",                     limit: 255
    t.string   "domains",                   limit: 255
    t.string   "type_identifier",           limit: 255
    t.string   "subtype",                   limit: 255
    t.string   "manufacturer",              limit: 255
    t.string   "model",                     limit: 255
    t.string   "description",               limit: 255
    t.string   "datasheet",                 limit: 255
    t.string   "url",                       limit: 255
    t.string   "iconURL",                   limit: 255
    t.integer  "component_types_id"
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.string   "classification_id"
    t.string   "cssClass"
    t.index ["component_types_id"], name: "index_component_details_on_component_types_id"
  end

  create_table "component_economic_details", force: :cascade do |t|
    t.string   "capex_related_capacity",               limit: 255
    t.string   "capex_initial_specific",               limit: 255
    t.string   "capex_inital_offset",                  limit: 255
    t.string   "capex_replacement_specific",           limit: 255
    t.string   "capex_replacement_offset",             limit: 255
    t.string   "capex_initial_capacity_x",             limit: 255
    t.string   "capex_initial_capacity_y",             limit: 255
    t.string   "capex_replacement_capacity_x",         limit: 255
    t.string   "capex_replacement_capacity_y",         limit: 255
    t.string   "capex_inital_capacity_x_diagram",      limit: 255
    t.string   "capex_initial_capacity_y_diagram",     limit: 255
    t.string   "capex_replacement_capacity_x_diagram", limit: 255
    t.string   "capex_replacement_capacity_y_diagram", limit: 255
    t.integer  "life_time"
    t.string   "opex_relative_to_capex",               limit: 255
    t.string   "opex_operation_related",               limit: 255
    t.string   "opex_specific_capacity",               limit: 255
    t.string   "startup_stand_still_boundary",         limit: 255
    t.string   "startup_penalty_specific_capacity",    limit: 255
    t.string   "startup_penalty_offset",               limit: 255
    t.integer  "component_details_id"
    t.datetime "created_at",                                       null: false
    t.datetime "updated_at",                                       null: false
    t.index ["component_details_id"], name: "index_component_economic_details_on_component_details_id"
  end

  create_table "component_general_parameters", force: :cascade do |t|
    t.integer "component_details_id"
    t.string  "installation_bus_connection_input_1"
    t.string  "installation_bus_connection_input_2"
    t.string  "installation_bus_connection_output_1"
    t.string  "installation_bus_connection_output_2"
    t.string  "required_resource_primary_energy_1"
    t.string  "required_resource_primary_energy_2"
    t.string  "required_resource_secondary_energy_1"
    t.string  "required_resource_secondary_energy_2"
    t.string  "capacity_boundary_first_definition"
    t.string  "first_definition_main_rated_power"
    t.string  "capacity_boundary_first_definition_min_fixed"
    t.string  "capacity_boundary_first_definition_recommended_max"
    t.string  "capacity_boundary_first_definition_strict_max"
    t.string  "second_definition"
    t.string  "capacity_boundary_second_definition_min_fixed"
    t.string  "capacity_boundary_second_definition_recommended_max"
    t.string  "capacity_boundary_second_definition_strict_max"
    t.string  "boundaries_first_power_input_min_specific"
    t.string  "boundaries_first_power_input_min_offset"
    t.string  "boundaries_first_power_input_max_specific"
    t.string  "boundaries_first_power_input_max_offset"
    t.string  "boundaries_second_power_input_min_specific"
    t.string  "boundaries_second_power_input_min_offset"
    t.string  "boundaries_second_power_input_max_specific"
    t.string  "boundaries_second_power_input_max_offset"
    t.string  "boundaries_first_output_input_min_specific"
    t.string  "boundaries_first_output_input_min_offset"
    t.string  "boundaries_first_output_input_max_specific"
    t.string  "first_output_input_max_offset"
    t.string  "second_output_input_min_specific"
    t.string  "second_output_input_min_offset"
    t.string  "second_output_input_max_specific"
    t.string  "second_output_input_max_offset"
    t.string  "soc_min_sprecific"
    t.string  "soc_min_offset"
    t.string  "first_output_type"
    t.string  "first_output_type_direct"
    t.string  "first_output_type_specific_gain"
    t.string  "first_output_type_loss_offset"
    t.string  "first_output_x_value_input_table"
    t.string  "first_output_y_value_output_table"
    t.string  "first_output_x_value_input_diagram"
    t.string  "first_output_y_value_output_diagram"
    t.string  "second_output_type"
    t.string  "second_output_type_relative_to_output_1"
    t.string  "second_output_type_direct"
    t.string  "second_output_type_gain_specific_capacity"
    t.string  "second_output_type_loss_offset"
    t.string  "gradients_upward"
    t.string  "gradients_downwards"
    t.string  "continuous_runtime_min"
    t.string  "continuous_runtime_max"
    t.string  "continuous_standstill_time_min"
    t.string  "continuous_standstill_time_max"
    t.string  "startup_standstill_time_boundary"
    t.string  "startup_standstill_duration_specific_capacity"
    t.string  "startup_standstill_duration_offset"
    t.string  "startup_standstill_input_specific_capacity"
    t.string  "startup_standstill_input_offset"
    t.index ["component_details_id"], name: "index_component_general_parameters_on_component_details_id"
  end

  create_table "component_installation_parameters", force: :cascade do |t|
    t.string   "bus_connection_input_1"
    t.string   "bus_connection_input_2"
    t.string   "bus_connection_output_1"
    t.string   "bus_connection_output_2"
    t.string   "required_resource_primary_energy_1"
    t.string   "required_resource_primary_energy_2"
    t.string   "required_resource_secondary_energy_carrier_1"
    t.string   "required_resource_secondary_energy_carrier_2"
    t.string   "capacity_boundaries_first_definition"
    t.string   "capacity_boundaries_first_definition_min_or_fixed"
    t.string   "capacity_boundaries_first_definition_max_recommended"
    t.string   "capacity_boundaries_first_definition_max_strict"
    t.string   "capacity_boundaries_second_definition"
    t.string   "capacity_boundaries_second_definition_min_or_fixed"
    t.string   "capacity_boundaries_second_definition_max_recommended"
    t.string   "capacity_boundaries_second_definition_max_strict"
    t.integer  "component_details_id"
    t.datetime "created_at",                                            null: false
    t.datetime "updated_at",                                            null: false
  end

  create_table "component_operation_parameters", force: :cascade do |t|
    t.integer "component_details_id"
    t.string  "first_power_input_min_specific"
    t.string  "first_power_input_min_offset"
    t.string  "first_power_input_max_specific"
    t.string  "first_power_input_max_offset"
    t.string  "second_power_input_min_specific"
    t.string  "second_power_input_min_offset"
    t.string  "second_power_input_max_specific"
    t.string  "second_power_input_max_offset"
    t.string  "first_output_input_min_specific"
    t.string  "first_output_input_min_offset"
    t.string  "first_output_input_max_specific"
    t.string  "first_output_input_max_offset"
    t.string  "second_output_input_min_specific"
    t.string  "second_output_input_min_offset"
    t.string  "second_output_input_max_specific"
    t.string  "second_output_input_max_offset"
    t.string  "soc_min_sprecific"
    t.string  "soc_min_offset"
    t.string  "second_output_type_relative_to_output_1"
    t.string  "second_output_type_direct"
    t.string  "second_output_type_gain_specific_capacity"
    t.string  "second_output_type_loss_offset"
    t.string  "gradients_upward"
    t.string  "gradients_downwards"
    t.string  "continuous_standstill_time_min"
    t.string  "continuous_standstill_time_max"
    t.string  "startup_standstill_time_boundary"
    t.string  "startup_standstill_duration_specific_capacity"
    t.string  "startup_standstill_duration_offset"
    t.string  "startup_standstill_input_specific_capacity"
    t.string  "startup_standstill_input_offset"
    t.index ["component_details_id"], name: "index_component_operation_parameters_on_component_details_id"
  end

  create_table "component_types", force: :cascade do |t|
    t.string   "category",    limit: 255
    t.string   "description", limit: 255
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  create_table "contexts", force: :cascade do |t|
    t.string "key_identifier"
    t.string "long_name"
    t.string "short_name"
    t.string "description"
    t.string "scope"
    t.string "value"
    t.string "data_type"
    t.string "uom"
    t.string "upper_boundary"
    t.string "lower_boundary"
  end

  create_table "dummy", id: false, force: :cascade do |t|
    t.text "localitá"
  end

  create_table "genericloads", force: :cascade do |t|
    t.string "date"
    t.string "electric_load_value"
    t.string "head_load_value"
  end

  create_table "license_codes", force: :cascade do |t|
    t.string   "title"
    t.string   "code"
    t.datetime "expiration_date"
    t.integer  "user_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["user_id"], name: "index_license_codes_on_user_id"
  end

  create_table "licenses", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.string   "price"
    t.integer  "duration_quantity"
    t.integer  "duration",          default: 0
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  create_table "loads", force: :cascade do |t|
    t.string "date"
    t.string "electric_load_value"
    t.string "head_load_value"
    t.string "load_description"
    t.string "loaCL"
    t.string "loaEL"
    t.string "loa_HE_HT"
    t.string "loa_HE_HW"
  end

  create_table "order_items", force: :cascade do |t|
    t.decimal  "unit_price",  precision: 12, scale: 3
    t.decimal  "total_price", precision: 12, scale: 3
    t.integer  "quantity"
    t.integer  "license_id"
    t.integer  "order_id"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.index ["license_id"], name: "index_order_items_on_license_id"
    t.index ["order_id"], name: "index_order_items_on_order_id"
  end

  create_table "orders", force: :cascade do |t|
    t.decimal  "subtotal",   precision: 12, scale: 3
    t.decimal  "tax",        precision: 12, scale: 3
    t.decimal  "shipping",   precision: 12, scale: 3
    t.decimal  "total",      precision: 12, scale: 3
    t.integer  "status",                              default: 0
    t.integer  "user_id"
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "organizations", force: :cascade do |t|
    t.string   "name"
    t.string   "address"
    t.string   "country"
    t.string   "zip"
    t.string   "phone"
    t.string   "city"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_organizations_on_user_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string   "title",       limit: 255
    t.string   "author",      limit: 255
    t.string   "description", limit: 255
    t.string   "coordinates", limit: 255
    t.integer  "user_id"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.index ["user_id"], name: "index_projects_on_user_id"
  end

  create_table "resources", force: :cascade do |t|
    t.string "city"
    t.string "coordinates"
    t.string "epw"
    t.string "rsc_WBT"
    t.string "coordinates_lookup"
  end

  create_table "simulations", force: :cascade do |t|
    t.string   "resources"
    t.string   "loads"
    t.string   "system"
    t.string   "components"
    t.string   "settings"
    t.string   "coordinates"
    t.string   "description"
    t.string   "lastModified"
    t.string   "author"
    t.string   "user_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "results"
    t.string   "project"
    t.index ["user_id"], name: "index_simulations_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "address"
    t.string   "country"
    t.string   "zip"
    t.string   "phone"
    t.string   "city"
    t.string   "iban"
    t.string   "bic"
    t.string   "depositor"
    t.boolean  "active_account",         default: false
    t.boolean  "admin",                  default: false
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
