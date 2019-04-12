class AddFieldsToLoads < ActiveRecord::Migration[5.0]
  def change
  	 create_table :loads do |t|
      t.string :date
      t.string :electric_load_value
      t.string :head_load_value
      
  	end
  end
end