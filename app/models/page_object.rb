class PageObject < ActiveRecord::Base
  include ThriveSmartObjectMethods

  self.caching_default = :page_update #[in :forever, :page_update, :any_page_update, 'data_update[datetimes]', :never, 'interval[5]']

end
