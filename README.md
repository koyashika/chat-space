# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## users テーブル 
 
|Column|Type|Options| 
|------|----|-------| 
|name|string|null: false, index: true| 
|email|string|null: false, index: true| 
|password|string|null: false| 
 
### Association 
- has_many :messages 
- has_many :groups,through: :groups_users 
- has_many :groups_users


## messages テーブル 
 
|Column|Type|Options| 
|------|----|-------| 
|text|text|
|image|string|
|user|references|null: false, foreign_key: true| 
|group|references|null: false, foreign_key: true| 
  
### Association 
- belongs_to :user 
- belongs_to :group 


## groupsテーブル 
 
|Column|Type|Options| 
|------|----|-------| 
|name|string|null: false, unique: true| 
 
### Association 
- has_many :messages 
- has_many :users,through: :groups_users 
- has_many :groups_users


## groups_usersテーブル 
 
|Column|Type|Options| 
|------|----|-------| 
|user|references|null: false, foreign_key: true| 
|group|references|null: false, foreign_key: true| 
 
### Association 
- belongs_to :group 
- belongs_to :user 
 