class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      ## User's attributes
      t.string :first_name
      t.string :last_name
      t.string :address
      t.string :country
      t.string :zip
      t.string :phone
      t.string :city
      t.string :iban
      t.string :bic
      t.string :depositor

      t.boolean :active_account, default: false
      t.boolean :admin, default: false

      t.timestamps
    end
  end
end
