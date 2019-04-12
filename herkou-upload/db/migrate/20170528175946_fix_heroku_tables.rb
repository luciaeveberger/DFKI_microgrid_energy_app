class FixHerokuTables < ActiveRecord::Migration[5.0]
    def change
      create_table "component_types", force: :cascade do |t|
        t.string   "category",    limit: 255
        t.string   "description", limit: 255
        t.datetime "created_at",              null: false
        t.datetime "updated_at",              null: false
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

      create_table "simulations", force: :cascade do |t|
        t.string   "title"
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
        t.index ["user_id"], name: "index_simulations_on_user_id"
      end

     
      create_table "component_details", force: :cascade do |t|
        t.string   "type_id",            limit: 255
        t.string   "energy_domain",       limit: 255
        t.string   "general_type_of_component", limit: 255
        t.string   "specific_component",  limit: 255
        t.string   "specific_technology", limit:255
        t.string   "label",              limit: 255
        t.string   "domains",            limit: 255
        t.string   "type_identifier",    limit: 255
        t.string   "subtype",            limit: 255
        t.string   "manufacturer",       limit: 255
        t.string   "model",              limit: 255
        t.string   "description",        limit: 255
        t.string   "datasheet",          limit: 255
        t.string   "url",                limit: 255
        t.string   "iconURL",            limit: 255
        t.integer  "component_types_id"
        t.datetime "created_at",                     null: false
        t.datetime "updated_at",                     null: false
        t.index ["component_types_id"], name: "index_component_details_on_component_types_id"
      end

      create_table "component_economic_details", force: :cascade do |t|
        t.string  "capex_related_capacity",      limit: 255
        t.string   "capex_initial_specific",     limit: 255
        t.string   "capex_inital_offset",        limit: 255
        t.string   "capex_replacement_specific", limit: 255
        t.string   "capex_replacement_offset",   limit: 255
        t.string    "capex_initial_capacity_x",  limit: 255
        t.string    "capex_initial_capacity_y",   limit: 255
        t.string    "capex_replacement_capacity_x", limit: 255 
        t.string    "capex_replacement_capacity_y", limit: 255
        t.string    "capex_inital_capacity_x_diagram", limit: 255
        t.string    "capex_initial_capacity_y_diagram", limit: 255
        t.string    "capex_replacement_capacity_x_diagram", limit: 255 
        t.string    "capex_replacement_capacity_y_diagram", limit: 255
        t.integer   "life_time" 
        t.string   "opex_relative_to_capex", limit: 255
        t.string    "opex_operation_related", limit: 255 
        t.string    "opex_specific_capacity", limit: 255 
        t.string    "startup_stand_still_boundary", limit: 255 
        t.string    "startup_penalty_specific_capacity", limit:255 
        t.string    "startup_penalty_offset", limit:255
        t.integer  "component_details_id"
        t.datetime "created_at",                       null: false
        t.datetime "updated_at",                       null: false
        t.index ["component_details_id"], name: "index_component_economic_details_on_component_details_id"
        end 
    end
end
