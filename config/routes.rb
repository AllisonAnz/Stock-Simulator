Rails.application.routes.draw do
  # get 'home/index'
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  resources :stocks, only: [:index, :show, :create]

  #post "/stocks" => 'stocks#index'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
