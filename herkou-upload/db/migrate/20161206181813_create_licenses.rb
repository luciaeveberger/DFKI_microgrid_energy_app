class CreateLicenses < ActiveRecord::Migration[5.0]
  def change
    create_table :licenses do |t|
      t.string :title
      t.string :description
      t.string :price
      t.integer :duration_quantity
      t.column :duration, :integer, default: 0

      t.timestamps
    end
  end
end