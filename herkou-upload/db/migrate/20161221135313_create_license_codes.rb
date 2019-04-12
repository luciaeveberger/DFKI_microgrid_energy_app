class CreateLicenseCodes < ActiveRecord::Migration[5.0]
  def change
    create_table :license_codes do |t|
      t.string :title
      t.string :code
      t.datetime :expiration_date

      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end