json.articles @articles do |article|
  json.title article.title
  json.created_at article.created_at.in_time_zone('Singapore').strftime("%d %b %Y")
  json.path article_path(article)
end
