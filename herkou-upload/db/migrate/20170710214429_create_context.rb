class CreateContext < ActiveRecord::Migration[5.0]
  def change
    create_table :contexts do |t|
      t.string :key_identifier
      t.string :long_name
      t.string :short_name
      t.string :description
      t.string :scope
      t.string :value
      t.string :data_type
      t.string :uom
      t.string :upper_boundary
      t.string :lower_boundary
    end
  end
end
