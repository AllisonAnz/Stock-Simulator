class SessionSerializer < ActiveModel::Serializer
  type :session
 
  has_one :user, serializer: UserSerializer
end
