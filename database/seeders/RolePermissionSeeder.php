<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Création des Permissions
        $permissions = [
            'edit post',
            'delete post',
            'publish post',
            'unpublish post',
            'forum access',
        ];

        foreach ($permissions as $permission) {
            // Vérifie si la permission existe déjà pour éviter les doublons
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'web']);
        }

        // Création des Rôles et assignation des Permissions
        $roleAdmin = Role::create(['name' => 'admin']);
        $roleAdmin->givePermissionTo(Permission::all());

        $rolePro = Role::create(['name' => 'pro']);
        $rolePro->givePermissionTo(['publish post', 'unpublish post', 'forum access']);

        $roleUser = Role::create(['name' => 'user']);
        $roleUser->givePermissionTo(['edit post', 'delete post']);
    }
}
