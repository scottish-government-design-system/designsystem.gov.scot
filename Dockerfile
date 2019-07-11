FROM jekyll/minimal:3.8.5
RUN \
  gem uninstall --force sass && \
  gem install -v 3.4.25 sass && \
  gem install -v 1.0.3 compass && \
  gem install -v 0.14.0 jekyll-redirect-from && \
  gem install -v 1.2.0 jekyll-sitemap
ENV PATH="$PATH:$GEM_HOME/bin"
ENV SASS_PATH=/usr/gem/gems/compass-core-1.0.3/stylesheets
