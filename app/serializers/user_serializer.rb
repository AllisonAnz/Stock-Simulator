class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_many :stocks
  has_many :transactions, through: :stocks

end
