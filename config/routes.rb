Rails.application.routes.draw do
  get 'messages/index'

  get 'messages/show'

  get 'group_users/index'

  get 'group_users/show'

  get 'group/index'

  get 'group/show'

  get 'user/index'

  get 'user/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
