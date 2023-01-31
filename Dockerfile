FROM jekyll/minimal:4.2.2
RUN \
  gem uninstall --force sass && \
  gem install -v 3.4.25 sass && \
  gem install -v 0.16.0 jekyll-redirect-from && \
  gem install -v 1.4.0 jekyll-sitemap
ENV PATH="$PATH:$GEM_HOME/bin"
ENV SASS_PATH=/usr/gem/gems/compass-core-1.0.3/stylesheets
