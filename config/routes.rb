Rails.application.routes.draw do
  resources :stocks
  
  resources :search_stocks, only: [:index]
  resources :users, only: [:show]
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"

  #post "/stocks" => 'stocks#index'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
