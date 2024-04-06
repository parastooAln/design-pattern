import { AuditTrail } from "./AuditTrail"
import { TransferMoneyTask } from "./TransferMoneyTask"

export const templateMain=()=>{
    const auditTrail=new AuditTrail();
    const task=new TransferMoneyTask(auditTrail)
    task.execute("A")
}