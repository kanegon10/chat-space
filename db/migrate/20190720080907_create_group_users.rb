class CreateGroupUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :group_users do |t|
      t.integer :group_id
      t.integers :user_id

      t.timestamps
    end
  end
end
