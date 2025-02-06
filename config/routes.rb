Rails.application.routes.draw do
  devise_for :users
  resources :contacts
  root "home#index"

  get "about" => "home#about"

  get "up" => "rails/health#show", as: :rails_health_check
end
