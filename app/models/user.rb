class User < ApplicationRecord
 has_many :group_users,foreign_key: :user_id
 has_many :groups,through: :group_users
 has_many :messages,foreign_key: :user_id
 end
