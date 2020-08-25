class AddStartingValueToSkill < ActiveRecord::Migration[6.0]
  def change
    add_column :skills, :start_value, :integer, default: 0
  end
end
