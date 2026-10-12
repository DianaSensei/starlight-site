// Optional plugins published from developer-desktop-miniapp. This list is the
// static fallback; plugins.astro overlays live versions and manifest URLs from
// the catalog. Keep it in sync with that repo's plugins/*/manifest.plugin.json.
export interface Plugin {
  id: string;
  label: string;
  description: string;
  keywords: string[];
}

export const plugins: Plugin[] = [
  {
    id: 'redis-client',
    label: 'Redis',
    description:
      'Redis client: browse and edit keys (string, hash, list, set, sorted set), inspect server info, and run raw commands from a CLI console.',
    keywords: ['redis', 'cache', 'key-value', 'cli', 'in-memory'],
  },
  {
    id: 'rabbit-client',
    label: 'RabbitMQ',
    description:
      'RabbitMQ management client: browse queues and exchanges, peek and publish messages, view bindings, connections, and cluster overview.',
    keywords: ['rabbitmq', 'amqp', 'queue', 'exchange', 'message broker'],
  },
  {
    id: 'container-manager',
    label: 'Containers',
    description:
      'Manage containers, images, volumes, and networks across Docker-compatible runtimes (Docker Desktop, Colima, Rancher Desktop, OrbStack, Podman): live CPU/memory usage, resource limits, and Compose project grouping.',
    keywords: ['docker', 'podman', 'container', 'compose', 'orbstack'],
  },
  {
    id: 'kafka-explorer',
    label: 'Kafka Explorer',
    description: 'Browse topics, inspect partitions and offsets, manage consumer groups, and produce messages.',
    keywords: ['kafka', 'topic', 'partition', 'offset', 'consumer group', 'producer', 'message', 'broker', 'stream'],
  },
];
