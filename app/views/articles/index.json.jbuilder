json.articles @articles do |article|
  json.title article.title
  json.created_at article.created_at
  json.path article_path(article)
end
