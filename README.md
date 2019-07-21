# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation
 
  ## usersテーブル

  |Column|Type|Options|
  |------|----|-------|
  |name|string|null: false|
  |email|string|unique: true|

  ### Association
  - has_many :group_users,foreign_key: :user_id
  - has_many :groups,through: :group_users
  - has_many :messages,foreign_key: :user_id
  - validates :name, presence: true
  
  ## groupsテーブル
  
  |Column|Type|Options|
  |------|----|-------|
  |name|string|null: false|

  ### Association
  - has_many :group_users,foreign_key: :group_id
  - has_many :users,through: :group_users
  - has_many :messages,foreign_key: :group_id
  - validates :name, presence: true
  
  ## group_usersテーブル

  |Column|Type|Options|
  |------|----|-------|
  |user_id|references|null: false, foreign_key: true|
  |group_id|references|null: false, foreign_key: true|

  ### Association
  - belongs_to :user,foreign_key: :user_id
  - belongs_to :group,foreign_key: :group_id

  ## messagesテーブル

  |Column|Type|Options|
  |------|----|-------|
  |body|text|
  |image|string|
  |group_id|references|foreign_key: true|
  |user_id|references|foreign_key: true|

  ### Association
  - belongs_to :user,foreign_key: :user_id
  - belongs_to :group,foreign_key: :group_id

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
