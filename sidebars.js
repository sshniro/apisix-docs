module.exports = {
  // someSidebar: {
  //   Introduction: ['doc1', 'doc2', 'doc3'],
  //   Plugins: ['mdx'],
  // },
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['introduction', 'architecture'],
    },
      {
          type: 'category',
          label: 'Getting Started',
          items: ['getting-started'],
      },
    {
      type: 'category',
      label: 'Plugins',
      items: [
          {
              type: 'category',
              label: 'Authentication',
              items: [
                  'plugins/en/basic-auth',
                  'plugins/en/oauth',
                  'plugins/en/jwt-auth',
                  'plugins/en/key-auth',
              ]
          },
          {
              type: 'category',
              label: 'Security',
              items: [
                  'plugins/en/consumer-restriction',
                  'plugins/en/cors',
                  'plugins/en/wolf-rbac',
                  'plugins/en/ip-restriction',
                  'plugins/en/limit-conn',
                  'plugins/en/limit-count',
                  'plugins/en/limit-req',
              ]
          },
          {
              type: 'category',
              label: 'Loggers',
              items: [
                  'plugins/en/http-logger',
                  'plugins/en/syslog',
                  'plugins/en/tcp-logger',
                  'plugins/en/udp-logger',
                  'plugins/en/kafka-logger',
              ]
          },
          {
              type: 'category',
              label: 'Transformations',
              items: [
                  'plugins/en/grpc-transcode',
                  'plugins/en/response-rewrite',
                  'plugins/en/proxy-rewrite',
              ]
          },
          {
              type: 'category',
              label: 'General',
              items: [
                  'plugins/en/grpc-transcode',
                  'plugins/en/fault-injection',
                  'plugins/en/echo',
                  'plugins/en/mqtt-proxy',
                  'plugins/en/proxy-cache',
                  'plugins/en/proxy-mirror',
                  'plugins/en/redirect',
              ]
          },
          {
              type: 'category',
              label: 'Monitoring',
              items: [
                  'plugins/en/prometheus',
                  'plugins/en/skywalking',
                  'plugins/en/zipkin',
              ]
          },
      ],
    },
    {
      type: 'category',
      label: 'Admin API',
      items: ['admin-api'],
    }
  ]
};
