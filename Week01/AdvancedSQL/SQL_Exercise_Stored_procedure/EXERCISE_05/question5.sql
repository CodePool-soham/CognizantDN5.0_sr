use CognizantStoredProcedures;
GO
CREATE PROCEDURE sp_GetEmployeeCountByDepartment
    @DepartmentID INT
AS
BEGIN

    SELECT
        COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = @DepartmentID;

END;
GO

EXEC sp_GetEmployeeCountByDepartment @DepartmentID = 3;


SELECT *
FROM Employees
WHERE DepartmentID = 3;