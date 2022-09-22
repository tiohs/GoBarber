import { container } from 'tsyringe';

import IStorageProvider from './StoryProvider/models/StorageProvider';
import DiskStorageProvider from './StoryProvider/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>('StorageProvider', DiskStorageProvider);
