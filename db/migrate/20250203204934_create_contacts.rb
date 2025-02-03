class CreateContacts < ActiveRecord::Migration[8.0]
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :email

      t.timestamps
    end
  end
end
