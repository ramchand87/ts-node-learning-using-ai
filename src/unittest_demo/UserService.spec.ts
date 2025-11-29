import { UserService } from './UserService';
import { Database } from './Database';

// 1. Mock the entire Database module
// This is like @Mock in Mockito
jest.mock('./Database');

describe('UserService with Mocks', () => {
    let userService: UserService;
    let mockDb: jest.Mocked<Database>;

    beforeEach(() => {
        // Clear all mocks before each test
        jest.clearAllMocks();

        // Create the mock instance
        // In Jest, because we called jest.mock('./Database'), the constructor returns a mock
        mockDb = new Database() as jest.Mocked<Database>;

        // Inject the mock (Constructor Injection)
        // This is like @InjectMocks in Mockito
        userService = new UserService(mockDb);
    });

    test('should return uppercase name when user exists', async () => {
        // Arrange (Mockito: when(db.getUser(1)).thenReturn(...))
        mockDb.getUser.mockResolvedValue({ id: 1, name: 'Alice' });

        // Act
        const result = await userService.getUserName(1);

        // Assert
        expect(result).toBe('ALICE');

        // Verify (Mockito: verify(db).getUser(1))
        expect(mockDb.getUser).toHaveBeenCalledWith(1);
        expect(mockDb.getUser).toHaveBeenCalledTimes(1);
    });

    test('should throw error when user does not exist', async () => {
        // Arrange
        mockDb.getUser.mockResolvedValue(null);

        // Act & Assert
        await expect(userService.getUserName(99)).rejects.toThrow("User not found");
    });

    // 5. Dynamic Mocking (Returning different values based on input)
    // Mockito: when(db.getUser(any())).thenAnswer(...)
    test('should return different names based on ID', async () => {
        mockDb.getUser.mockImplementation(async (id: number) => {
            if (id === 1) return { id: 1, name: 'Alice' };
            if (id === 2) return { id: 2, name: 'Bob' };
            return null;
        });

        const name1 = await userService.getUserName(1);
        const name2 = await userService.getUserName(2);

        expect(name1).toBe('ALICE');
        expect(name2).toBe('BOB');
    });
});
