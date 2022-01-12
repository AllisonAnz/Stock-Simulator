class User < ApplicationRecord
    
    has_secure_password 
    has_many :stocks
    has_many :transactions, through: :stocks
   

    validates_presence_of :email
    validates_uniqueness_of :email
end
