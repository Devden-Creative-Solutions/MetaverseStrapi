import type { Schema, Attribute } from '@strapi/strapi';

export interface AnalyticsAnalyticPage extends Schema.Component {
  collectionName: 'components_analytics_analytic_pages';
  info: {
    displayName: 'AnalyticPage';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'AnalyticTitle'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'analytics.analytic-page': AnalyticsAnalyticPage;
    }
  }
}
