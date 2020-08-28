class ChangeDefaultValueOfIsEqualInSkill < ActiveRecord::Migration[6.0]
  def change
    change_column :skills, :is_equal_to_stat, :boolean, default: false
  end
end
