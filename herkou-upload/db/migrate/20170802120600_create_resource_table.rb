class CreateResourceTable < ActiveRecord::Migration[5.0]
  def change
    create_table :resources do |t|
      t.string :city
      t.string :coordinates
      t.string :epw
    end
  end
end
