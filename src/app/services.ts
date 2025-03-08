import db from "@/lib/postgres";

const getColumnNames = async (tableName: string) => {
  try {
    const columnNames = await db.query(
      `SELECT column_name
             FROM information_schema.columns
             WHERE table_name = $1
             AND table_schema = 'public'
             ORDER BY ordinal_position  
            `,
      [tableName]
    );
    return columnNames.rows;
  } catch (error) {
    console.error("Error fetching column names: ", error);
    return [];
  }
};

export { getColumnNames };
