class SessionSerializer < ActiveModel::Serializer
  type :session
  #attributes :user_id, :stocks
  has_one :user, serializer: UserSerializer
end
