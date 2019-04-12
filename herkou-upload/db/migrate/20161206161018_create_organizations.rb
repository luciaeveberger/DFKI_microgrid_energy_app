class CreateOrganizations < ActiveRecord::Migration[5.0]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :address
      t.string :country
      t.string :zip
      t.string :phone
      t.string :city
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
