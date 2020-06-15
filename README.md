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
|name|string|null: false, add_index: true| 
|email|string|null: false, add_index: true| 
|password|string|null: false| 
 
### Association 
- has_many :messages 
- has_many :groups,through: :groups_users 
- has_many :messages 


## message テーブル 
 
|Column|Type|Options| 
|------|----|-------| 
|message|text|null: false| 
|image|string|null: false| 
|user_id|integer|null: false, foreign_key: true| 
|group_id|integer|null: false, foreign_key: true| 
  
### Association 
- belongs_to :user 
- belongs_to :group 

